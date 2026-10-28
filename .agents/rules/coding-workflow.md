---
trigger: always_on
---

Rule name: coding-workflow
Rule content: for every non-trivial coding task, follow this workflow:

1. first inspect the existing project structure, agents.md, package.json, and relevant source files.

2. start in planning mode. analyze my requirements and prepare a detailed, step-by-step implementation plan. explain every step in beginner-friendly language, including what needs to be done, why it is necessary, which files will be created or modified, how components and data will interact, whether dependencies are needed, and how the implementation will be tested.

3. during planning, do not create, edit, or delete project files. only inspect the existing codebase and present the plan.

4. present the complete plan and wait for my explicit approval. if i say "need to change the plan" or request any modifications, revise the plan and wait for approval again.

5. begin implementation only after i explicitly say "implement the plan" or provide equivalent clear approval.

6. follow the approved plan, existing project conventions, and agents.md. avoid unrelated changes, unnecessary dependencies, and unapproved scope changes.

7. implement the plan step by step. explain important technical decisions in beginner-friendly language when appropriate.

8. run relevant tests, lint checks, and build checks when available. fix issues caused by your changes and summarize what was completed, which files were changed, and any remaining issues.

9. if a significant change to the approved plan becomes necessary, explain the reason, describe the proposed change, and wait for my approval before proceeding.

10. if a task is trivial and does not require a detailed plan, handle it directly unless i explicitly request planning mode.
