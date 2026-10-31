
        const the shared session_present = ${Ae} in input;
        if (the shared session.issues.length) {${…}
        }
        if (!the shared session_present && !the shared session.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [the shared session]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (the shared session_present) {
          newResult[the shared session] = the shared session.value;
        }

      