# Telegram Auto Update name and username with Hashed values

Some of us want to stay very low profile and untracable. If you are looking for a tool that change telegram name and username with hashed value at specific time (recommended is weekly), this tool is for you. This will automatically generate hashed values for your name and username and set those values to your account.

## Getting Started

You can setup this project in your VPS or locally. I personally recommend doing it on VPS since you are not going to open your personal computer all the time.

It was hard to explore Telegram documentation but luckily I found this awesome TDLib for NodeJs. You can checkout the library [here](https://https://github.com/Bannerets/tdl).

### Installation Guide

Generate `.env` file using this command.

`cp .env.example .env`

Inside `.env`, there are three values you need to get. Follow the instruction inside `.env` file. I left out comment in the file how to get those values.

--

Install the dependencies

`npm install`

Run the project

`node index.js`

(for running this project in VPS, I recommend using [pm2](https://https://pm2.keymetrics.io/) which is a tool for running commands in the background without having to run in watchmode)

--

For the first time running the project, you will have to login Telegram. The cli program will ask your login credentials like phone number and OTP. If you have set the password to your telegram account, password will also be required to enter in cli. This is required to authenticate for Telegram. We cannot bypass everything just with API key and id.

--

## Upcoming features (Contributions are very welcome)

- Sending your very special friends a message about you have changed the name and username.
