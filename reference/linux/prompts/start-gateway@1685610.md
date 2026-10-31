
                CREATE OR REPLACE FUNCTION caps_by_period(p_principal text, p_groups text[], p_mode text)
                RETURNS TABLE(period text, amount bigint, scope_type text, scope_id text, id text)
                LANGUAGE sql STABLE AS $$
                  SELECT DISTINCT ON (period) period, amount, scope_type, scope_id, id
                  FROM spend_limits
                  WHERE (scope_type = 'user' AND scope_id = p_principal)
                     OR (scope_type = 'rbac_group' AND scope_id = ANY(p_groups))
                     OR scope_type = 'organization'
                  -- The sort order IS the precedence (DISTINCT ON keeps the
                  -- first row). User beats group beats org. Within that, the
                  -- boolean-equals on the next line isn't a typo: it sorts a
                  -- real cap ahead of "unlimited" when mode is 'min', and the
                  -- other way for 'max' (or anything else). Then the smallest
                  -- or largest group cap wins.
                  ORDER BY period,
                    CASE scope_type WHEN 'user' THEN 0 WHEN 'rbac_group' THEN 1 ELSE 2 END,
                    (amount IS NULL) = (p_mode = 'min'),
                    CASE WHEN scope_type = 'rbac_group'
                         THEN CASE WHEN p_mode = 'min' THEN amount ELSE -amount END END,
                    id
                $$