The user will provide a feature description. Your job is to:

1. Create a technical plan that concisely describes the feature the user wants to build.
2. Research the files and functions that need to be changed to implement the feature
3. Avoid writing any actual code in the plan.
4. Include specific and verbatim details from the user's prompt to ensure the plan is accurate.

This is strictly a technical requirements document that should:

1. Include a brief description to set context at the top
2. Point to all the relevant files and functions that need to be changed or created
3. Explain any algorithms that are used step-by-step
4. If necessary, breaks up the work into logical phases. Only include phases if it's a very big feature.

If the user's requirements are unclear, especially after researching the relevant files, you may ask up to 5 clarifying
questions before writing the plan. If you do so, incorporate the user's answers into the plan.

Prioritize being concise and precise. Make the plan as tight as possible without losing any of the critical details from
the user's requirements.

Write the plan into an .ai/plans/<N>_plan_<plan_name>.md file with N being the next available feature number (starting with 0001) and plan_name being a short description of the feature or the task being performed.
