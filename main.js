'use strict';

/*
 * Created with @iobroker/create-adapter v1.25.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');

// Load your modules here, e.g.:
const jsonExplorer = require('iobroker-jsonexplorer');
const stateAttr = require(`${__dirname}/lib/stateAttr.js`); // Load attribute library
const { version } = require('./package.json');
//global variables

class test_jsonexplorer extends utils.Adapter {
    /**
     * @param {Partial<utils.AdapterOptions>} options - Adapter options object.
     */
    constructor(options) {
        super({
            ...options,
            name: 'test_jsonexplorer',
        });
        this.on('ready', this.onReady.bind(this));
        //this.on('objectChange', this.onObjectChange.bind(this));
        //this.on('stateChange', this.onStateChange.bind(this));
        //this.on('message', this.onMessage.bind(this));
        this.on('unload', this.onUnload.bind(this));
        jsonExplorer.init(this, stateAttr);
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    async onReady() {
        // Initialize adapter
        //get adapter configuration
        this.log.info(`Started with JSON-Explorer version ${jsonExplorer.version} at ${jsonExplorer.path}`);
        jsonExplorer.sendVersionInfo(version);
        //this.log.info('INTERNET: ' + await this.checkInternetConnection());
        //this.log.info('INTERNET2: ' +  await isOnline());

        let json = JSON.parse(`
[{"id":1,"name":"Wohnzimmer (Tado)","type":"HEATING","dateCreated":"2019-12-09T21:09:31.833Z","deviceTypes":["RU01"],"devices":[{"deviceType":"RU01","serialNo":"RU2948924928","shortSerialNo":"RU2948924928","currentFwVersion":"54.20","connectionState":{"value":true,"timestamp":"2025-09-28T10:46:20.445Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"batteryState":"NORMAL","duties":["ZONE_UI","CIRCUIT_DRIVER","ZONE_LEADER"],"id":"RU2948924928"}],"reportAvailable":false,"showScheduleSetup":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"timeoutInSeconds":3600,"openWindowDetectionEnabled":true}},{"id":2,"name":"Schlafzimmer (Tado)","type":"HEATING","dateCreated":"2020-10-02T12:55:46.818Z","deviceTypes":["RU01"],"devices":[{"deviceType":"RU01","serialNo":"RU0447874560","shortSerialNo":"RU0447874560","currentFwVersion":"54.20","connectionState":{"value":true,"timestamp":"2025-09-28T10:32:14.107Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"batteryState":"NORMAL","duties":["ZONE_UI","CIRCUIT_DRIVER","ZONE_LEADER"],"id":"RU0447874560"}],"reportAvailable":false,"showScheduleSetup":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"timeoutInSeconds":3600,"openWindowDetectionEnabled":true}},{"id":5,"name":"Büro (Tado)","type":"HEATING","dateCreated":"2025-01-07T12:46:04.328Z","deviceTypes":["RU02"],"devices":[{"deviceType":"RU02","serialNo":"RU2445685248","shortSerialNo":"RU2445685248","currentFwVersion":"215.2","connectionState":{"value":true,"timestamp":"2025-09-28T10:40:01.938Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"batteryState":"NORMAL","duties":["ZONE_UI","CIRCUIT_DRIVER","ZONE_LEADER"],"id":"RU2445685248"}],"reportAvailable":false,"showScheduleSetup":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"timeoutInSeconds":3600,"openWindowDetectionEnabled":true}},{"id":3,"name":"Ankleide (Tado)","type":"HEATING","dateCreated":"2024-04-02T15:29:51.171Z","deviceTypes":["RU01"],"devices":[{"deviceType":"RU01","serialNo":"RU1411FT01051688535040","shortSerialNo":"RU1688535040","currentFwVersion":"54.20","connectionState":{"value":true,"timestamp":"2025-09-28T10:44:12.507Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"batteryState":"NORMAL","duties":["ZONE_UI","CIRCUIT_DRIVER","ZONE_LEADER"],"id":"RU1411FT01051688535040"}],"reportAvailable":false,"showScheduleSetup":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"timeoutInSeconds":3600,"openWindowDetectionEnabled":true}}]
        `);

        //let json1 = { "id": 1, "name1aaaa": "Wohnzimmer" };

        //await jsonExplorer.traverseJson(json, 'alteVersion', true, true, 0, 0);
        await jsonExplorer.traverseJson(json, 'neueVersion', true, true, 3);
        //await JsonExplorer.stateSetCreate('TestStateAA', 'teststateAA', 'Text');
        //await JsonExplorer.stateSetCreate('TestStateAA', 'teststateAA', 'Text');
        //await JsonExplorer.stateSetCreate(`teststate`, `teststate`, new Date());
        //this.log.info(typeof (new Date().getTime()));

        /*
        let readDate = new Date('Fri May 28 2021 04:23:41 GMT+0200');
        this.log.info('readDate.getTime() ' + readDate.getTime());
        await this.setStateAsync('aaa.test', readDate.getTime());
        let getDate = await this.getStateAsync('aaa.test');
        this.log.info('ReadState ' + getDate.val);
        */

        /*
        await this.setStateAsync(`teststate`, {
            val: new Date().getTime(),
            ack: true,
            expire: 0
        });*/

        //let host = 'dns.google';
        //let res = (await ping.promise.probe(host)).alive;
        //this.log.info('Ping: ' + JSON.stringify(res));
        //this.log.info('Ping: ' + JSON.stringify(res.alive));

        this.terminate ? this.terminate(0) : process.exit(0);
    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     *
     * @param {() => void} callback - Function to be called when cleanup is complete.
     */
    onUnload(callback) {
        try {
            this.log.info('cleaned everything up...');
            callback();
        } catch {
            callback();
        }
    }

    /*
    /**
     * Is called if a subscribed state changes
     * @param {string} id
     * @param {ioBroker.State | null | undefined} state
     */
    /*
    onStateChange(id, state) {
        if (state) {
            // The state was changed
            this.log.debug(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
        } else {
            // The state was deleted
            this.log.debug(`state ${id} deleted`);
        }
    }*/
}

// @ts-expect-error alles ok
if (module.parent) {
    // Export the constructor in compact mode
    /**
     * Creates a new instance of the test_jsonexplorer adapter.
     *
     * @param {Partial<utils.AdapterOptions>} [options] - Adapter options object.
     */
    module.exports = (options = {}) => new test_jsonexplorer(options);
} else {
    // otherwise start the instance directly
    new test_jsonexplorer({});
}
