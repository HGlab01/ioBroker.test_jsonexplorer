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
     * @param {Partial<utils.AdapterOptions>} [options={}]
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
        [{"id":1,"name1aaaa":"Wohnzimmer","type":"HEATING","dateCreated":"2017-12-25T07:00:36.353Z","deviceTypes":["RU01","VA02"],"devices":[{"deviceType":"RU01","serialNo":"RU1553795072","shortSerialNo":"RU1553795072","currentFwVersion":"54.20","connectionState":{"value":true,"timestamp":"2021-04-16T10:22:27.753Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"batteryState":"NORMAL","duties":["ZONE_UI","CIRCUIT_DRIVER","ZONE_LEADER"]},{"deviceType":"VA02","serialNo":"VA2830045696","shortSerialNo":"VA2830045696","currentFwVersion":"79.1","connectionState":{"value":true,"timestamp":"2021-04-16T10:22:51.168Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"mountingState":{"value":"CALIBRATED","timestamp":"2021-02-11T22:42:41.050Z"},"batteryState":"NORMAL","childLockEnabled":false,"duties":["ZONE_UI","ZONE_DRIVER"]}],"reportAvailable":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"enabled":false,"timeoutInSeconds":900}},{"id":2,"name":"Badezimmer","type":"HEATING","dateCreated":"2017-12-25T07:16:20.117Z","deviceTypes":["VA01"],"devices":[{"deviceType":"VA01","serialNo":"VA2311784448","shortSerialNo":"VA2311784448","currentFwVersion":"54.20","connectionState":{"value":true,"timestamp":"2021-04-16T10:17:25.096Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"mountingState":{"value":"CALIBRATED","timestamp":"2021-03-14T12:50:06.503Z"},"batteryState":"NORMAL","childLockEnabled":false,"duties":["ZONE_UI","ZONE_DRIVER","ZONE_LEADER"]}],"reportAvailable":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"enabled":false,"timeoutInSeconds":1800}},{"id":3,"name":"Kinder hinten","type":"HEATING","dateCreated":"2017-12-25T08:26:53.835Z","deviceTypes":["VA01"],"devices":[{"deviceType":"VA01","serialNo":"VA2227832832","shortSerialNo":"VA2227832832","currentFwVersion":"54.20","connectionState":{"value":true,"timestamp":"2021-04-16T10:14:24.542Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"mountingState":{"value":"CALIBRATED","timestamp":"2021-02-10T15:42:42.635Z"},"batteryState":"NORMAL","childLockEnabled":false,"duties":["ZONE_UI","ZONE_DRIVER","ZONE_LEADER"]}],"reportAvailable":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"enabled":false,"timeoutInSeconds":1800}},{"id":4,"name":"Schlafzimmer","type":"HEATING","dateCreated":"2017-12-25T15:18:04.506Z","deviceTypes":["VA01"],"devices":[{"deviceType":"VA01","serialNo":"VA1194395648","shortSerialNo":"VA1194395648","currentFwVersion":"54.20","connectionState":{"value":true,"timestamp":"2021-04-16T10:23:13.817Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"mountingState":{"value":"CALIBRATED","timestamp":"2021-02-02T15:58:56.320Z"},"batteryState":"NORMAL","childLockEnabled":false,"duties":["ZONE_UI","ZONE_DRIVER","ZONE_LEADER"]}],"reportAvailable":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"enabled":false,"timeoutInSeconds":3600}},{"id":5,"name":"Duschbad","type":"HEATING","dateCreated":"2019-07-26T11:31:09.116Z","deviceTypes":["VA02"],"devices":[{"deviceType":"VA02","serialNo":"VA2813268480","shortSerialNo":"VA2813268480","currentFwVersion":"79.1","connectionState":{"value":true,"timestamp":"2021-04-16T10:20:35.255Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"mountingState":{"value":"CALIBRATED","timestamp":"2021-02-11T22:36:07.085Z"},"batteryState":"NORMAL","childLockEnabled":false,"duties":["ZONE_UI","ZONE_DRIVER","ZONE_LEADER"]}],"reportAvailable":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"enabled":false,"timeoutInSeconds":1800}},{"id":6,"name":"Kinder Mitte","type":"HEATING","dateCreated":"2019-07-26T11:34:29.265Z","deviceTypes":["VA02"],"devices":[{"deviceType":"VA02","serialNo":"VA1236210176","shortSerialNo":"VA1236210176","currentFwVersion":"79.1","connectionState":{"value":true,"timestamp":"2021-04-16T10:20:13.162Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"mountingState":{"value":"CALIBRATED","timestamp":"2021-02-22T15:56:50.292Z"},"batteryState":"NORMAL","childLockEnabled":false,"duties":["ZONE_UI","ZONE_DRIVER","ZONE_LEADER"]}],"reportAvailable":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"enabled":false,"timeoutInSeconds":1800}},{"id":7,"name":"Anbau","type":"HEATING","dateCreated":"2019-07-26T11:50:27.714Z","deviceTypes":["VA02"],"devices":[{"deviceType":"VA02","serialNo":"VA3031372288","shortSerialNo":"VA3031372288","currentFwVersion":"79.1","connectionState":{"value":true,"timestamp":"2021-04-16T10:23:10.172Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"mountingState":{"value":"CALIBRATED","timestamp":"2021-02-09T08:40:02.814Z"},"batteryState":"NORMAL","childLockEnabled":false,"duties":["ZONE_UI","ZONE_DRIVER","ZONE_LEADER"]}],"reportAvailable":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"enabled":false,"timeoutInSeconds":900}},{"id":8,"name":"Waschkeller","type":"HEATING","dateCreated":"2020-02-04T09:48:20.276Z","deviceTypes":["VA02"],"devices":[{"deviceType":"VA02","serialNo":"VA0818288384","shortSerialNo":"VA0818288384","currentFwVersion":"79.1","connectionState":{"value":true,"timestamp":"2021-04-16T10:23:48.721Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"mountingState":{"value":"CALIBRATED","timestamp":"2021-03-05T11:23:15.072Z"},"batteryState":"NORMAL","childLockEnabled":false,"duties":["ZONE_UI","ZONE_DRIVER","ZONE_LEADER"]}],"reportAvailable":false,"supportsDazzle":true,"dazzleEnabled":true,"dazzleMode":{"supported":true,"enabled":true},"openWindowDetection":{"supported":true,"enabled":false,"timeoutInSeconds":900}},{"id":0,"name":"Warmwasser","type":"HOT_WATER","dateCreated":"2017-12-25T07:00:37.231Z","deviceTypes":["RU01"],"devices":[{"deviceType":"RU01","serialNo":"RU1553795072","shortSerialNo":"RU1553795072","currentFwVersion":"54.20","connectionState":{"value":true,"timestamp":"2021-04-16T10:22:27.753Z"},"characteristics":{"capabilities":["INSIDE_TEMPERATURE_MEASUREMENT","IDENTIFY"]},"batteryState":"NORMAL","duties":["ZONE_UI","ZONE_DRIVER","ZONE_LEADER"]}],"reportAvailable":false,"supportsDazzle":false,"dazzleEnabled":false,"dazzleMode":{"supported":false},"openWindowDetection":{"supported":false}}]
        `);

        let json1 = { "id": 1, "name1aaaa": "Wohnzimmer" };

        await jsonExplorer.TraverseJson(json1, 'TestObject', true, true, 0, 0);
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
     * @param {() => void} callback
     */
    onUnload(callback) {
        try {
            this.log.info('cleaned everything up...');
            callback();
        } catch (e) {
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

// @ts-ignore parent is a valid property on module
if (module.parent) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<utils.AdapterOptions>} [options={}]
     */
    module.exports = (options) => new test_jsonexplorer(options);
} else {
    // otherwise start the instance directly
    new test_jsonexplorer();
}
