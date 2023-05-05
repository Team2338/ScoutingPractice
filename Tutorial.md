# Manually create new subproject
Any place where you see {subproject}, replace it with the name of your subproject.
1. Open terminal in root project directory
2. Run `npx create-react-app@latest {name} --template typescript`.
3. Run `cd ${subproject}`
4. Install dependencies with
`npm install
axios
redux
react-redux
@reduxjs-toolkit`
5. Install the Material UI libraries with
`npm install
@emotion/react
@emotion/styled
@mui/icons-material
@mui/material`
6. Install development dependencies with
`npm install sass --save-dev`
7. Edit tsconfig.json:
   - Change `strict: true` to `strict: false`
