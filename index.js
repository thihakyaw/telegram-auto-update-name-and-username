const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')
const { getTdjson } = require('prebuilt-tdlib')
const randomstring = require("randomstring");
require('dotenv').config()
const CronJob = require('cron').CronJob;

const client = new Client(new TDLib(getTdjson()), {
    apiId: process.env.API_ID,
    apiHash: process.env.API_HASH,
})

async function main() {
    new CronJob(
	process.env.CRON,
        async function () {
        console.log('New Username set')
        await client.connectAndLogin()

        const hashedValue = randomstring.generate({
          length: 18,
          charset: 'alphabetic'
        });

        await client.invoke({
            _: 'setName',
            first_name: hashedValue
        })

        await client.invoke({
            _: 'setUsername',
            username: hashedValue
        })
	},
	null,
    true,
    'America/Los_Angeles'
    );
}

main().catch(console.error)