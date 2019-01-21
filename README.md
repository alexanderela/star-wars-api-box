[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) 
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![Waffle.io - Columns and their card count](https://badge.waffle.io/alexanderela/swapibox.svg?columns=all)](https://waffle.io/alexanderela/swapibox)

# SWAPI Box
This project was created using the [Star Wars API](https://swapi.co). Users are able to view various Star Wars data sets (planets, people, and vehicles), and save their favorites.

## Contributing Team Members
[djcaraballo (Dina Caraballo) * GitHub](https://github.com/djcaraballo)

[alexanderela (Alexander Ela) * GitHub](https://github.com/alexanderela)

## Getting Started
`git clone` this [GitHub - djcaraballo/SWAPI-box](https://github.com/djcaraballo/SWAPI-box)

`npm install`

`npm start`

## How to Use
#### Retrieve and Save Unique API Keys
This application uses data from the [Star Wars API](https://swapi.co). You will need a free API key to fetch the data. Click [here](https://swapi.co) to create a free account and receive your key.




#### Save and Export API Key
Check out [this site](https://gist.github.com/derzorngottes/3b57edc1f996dddcab25) to learn more about saving API keys.

## See it live!
![A screen recording of the application](https://github.com/djcaraballo/SWAPI-box/blob/master/src/assets/SWAPI-screenshots/ScreenVideo.gif)

## Technologies Used
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other technologies used:
- React.js
- React Router

Tested with:
- Jest
- Enzyme

## Project Requirements
Project spec can be found [here](http://frontend.turing.io/projects/swapi-box.html)

## Wireframe
![Alt text](./src/assets/SWAPI-Box-Wireframe.png "Wireframe")

## Desktop View
#### Landing Page
![Alt text](./src/assets/SWAPI-screenshots/opening-page.png "Opening Page")

#### People Cards
![Alt text](./src/assets/SWAPI-screenshots/people.png "People Page")

#### Planets Cards
![Alt text](./src/assets/SWAPI-screenshots/planets.png "Planets Page")

#### Vehicles Cards
![Alt text](./src/assets/SWAPI-screenshots/vehicles.png "Vehicles Page")

Hi , 

I’m a software developer in Denver currently attending the Front-End Engineering program at Turing School of Software & Design. 
I found your contact info on LinkedIn and [insert reason for contacting them].

In researching [company] I found [insert relevant findings].

Would I be able to ask you a few questions over the phone sometime this week or next?

Thanks,

Alexander Ela
(818) 445-8285
ela.alexander@gmail.com


Hi Zac,

I hope you had a wonderful and restful holiday!
When would be a good time for you to schedule the code pairing we discussed last month?
I remember you mentioning the second week of January but I just wanted to double check.

Thanks,

LS_COLORS="di=4;33"
LS_COLORS="fi=1;95"

LS_COLORS="di=4;33:fi=1;95"


#### Favorites Cards
![Alt text](./src/assets/SWAPI-screenshots/favorites.png "Favorites Page")

export CLICOLOR=1
LS_COLORS=$LS_COLORS:'di=1;33:fi=95' ; export LS_COLORS

export CLICOLOR=1
export LSCOLORS=Exfxcxdxbxegedabagacad


parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\[\033[00;92m\]\u :: \[\033[00;96m\]\W \[\033[00m\]-\[\033[00;91m\]\$(parse_git_branch)\[\033[93m\] $\[\033[00m\] "