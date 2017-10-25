Flow Engine
=============================

Description
-----------
Your challenge is to create a simple *flow engine*.

Flow engine is an application that executes a flow consisting of linked rules against incoming data and each rule will contain:
- `id`
- `body`, that runs against the incoming data. (it's a function which takes a parameter and returns a boolean)
- `true_id`, that is the next rule to be executed if function returns true
- `false_id`, that is the next rule to be executed if function returns false

You can pass the incoming data (a simple JSON string parsed to a JavaScript object) to the created flow, to excute it!
The execution will end when `null` is provided for `true_id` or `false_id` accroding to what is the returned from related body function.

Outcome
-------------------
- By running the application, we must see the list of rules (like as [here](fs-fe-codechallenge-mockup.png) in the mockup), colorefulled based on being passed or failed
- We must be able to see each rules body, next rule-id if it passes and next rule-id if it fails (like first one in the mockup)
- user being able to open/close the panel would be a plus point

Acceptance Criteria
-------------------
- Flow engine should never get circular based on given rule-set.
- As mentioned you must use Javascript or Typescript for the logic implementation and ReactJS to present! For styling you must use one of CSS Pre-Processors (preferly SASS)
- Proper bundler or task runner would be a plus point

Notes from IT
-------------
- Please don't spend more than 3 - 4 hours on this task.
- Provided mockup is just an idea how we want you to implemnet the UI. We indeed don't need you to provide the exact same design! Feel free to be creative!