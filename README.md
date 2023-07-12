### This repo demonstrates a file watching issue with Vite


To reproduce:

1. Clone repo
2. `docker compose up` in the root. Make sure you have Docker Compose V2 installed

    Also make sure you have VirtioFS configured in Docker settings (OSX)
3. Visit http://localhost:3000 in your browser. (project1)
4. Visit http://localhost:3001 in your browser. (project2)


As you make changes to `project1/src/App.tsx` or `project2/src/App.tsx` you should see those changes reflected in the respective browser page.

However, if you make changes to `shared/src/utils.ts`, you will only see those changes reflected in `project2`. It's not working in `project1` due to some unknown issue.

(it only works in `project2` due it using "polling" rather than file events)


Curiously, if you repeat all of the above steps locally, i.e. `npm install` locally, and run each with `npm run dev` - there is no issue and `project1` will update as `shared/src/utils.ts` is modified
