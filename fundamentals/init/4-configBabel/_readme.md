#1- Install babel globally by using the following command.

 npm i -g babel-cli
 npm i -g babel-core

`--optionally yarn g add babel-cli`


#2- Check if babel was installed

 write in terminal: babel -h

#3- Add babel -  https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7707628?start=0
I was having some problems with this, so I basically had to copy this solution: 

https://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token/33460642#33460642

which is, add the package.json the devDepencences,
  "devDependencies": {
    "babel-core": "^6.7.6",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "babel-preset-stage-0": "^6.5.0"
  }
}


create .babelrc  file and put it in
{
    "presets": ["es2015", "stage-0", "react"]
}



#4 create two folders: public and src.
inside public create another one: scripts

Explanation: Babel will understand our jsx that is in src/app.js and compile pure JS  (es5)  to public/scripts/app.js

#5 create some jsx in the src/app.js file.
example: var template = <h1>hello world</h1>

#6 Execute the command
babel src/app.js --out-file=public/scripts/app.js --presents=env,react

#7 check if it has filled the file public/scripts/app.js

#8 Detect automatically changes
babel src/app.js --out-file=public/scripts/app.js --presents=env,react --watch


