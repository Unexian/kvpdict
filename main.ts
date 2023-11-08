class KVPDict<Keys, Values> {
    private keys: Keys[] = []
    private values: Values[] = []
    constructor(keys: Keys[] | null = null, vals: Values[] | null = null) {
        this.keys = keys || []
        this.values = vals || []
        if (this.keys.length > this.values.length) {
            throw "Error: Keys without values"
        } else if (this.keys.length < this.values.length) {
            throw "Error: Values without keys"
        }
    }
    public set(key: Keys, val: Values) {
        if (this.keys.indexOf(key) == -1) {
            this.keys.push(key)
            this.values.push(val)
        } else {
            this.values[this.keys.indexOf(key)] = val
        }
    }
    public get(key: Keys): Values | undefined {
        return this.values[this.keys.indexOf(key)]
    }
    public remove(key: Keys) {
        if (this.keys.indexOf(key) != -1) {
            this.values.splice(this.keys.indexOf(key), 1)
            this.keys.splice(this.keys.indexOf(key), 1)
        }
    }
    public toString() {
        let output = "{"
        for (let i = 0; i >= this.keys.length - 1; i++) {
            output += (this.keys[i] + ": " + this.values[i] + ", ")
        }
        output += (this.keys[this.keys.length - 1] + ": " + this.values[this.keys.length - 1] + "}")
        return output
    }
    public clean() {
        this.keys = []
        this.values = []
    }
}

//% color="#2ab38a" weight=50 advanced=true icon="\uf0ce"
namespace kvpdict {
    //% block="empty KVPdict" weight=100
    //% blockSetVariable=myDict
    //% hidden
    export function createKvpDict(): KVPDict<any, any> {
        return new KVPDict<any, any>()
    }

    //% block="Set $dict value at key $key to $value" weight=75
    //% dict.defl=myDict
    //% dict.shadow=variables_get
    //% hidden
    export function setKey(dict: KVPDict<any, any>, key: any, value: any) {
        dict.set(key, value)
    }
    //% block="Get $dict value at key $key" weight=50
    //% dict.defl=myDict
    //% dict.shadow=variables_get
    //% hidden
    export function getKey(dict: KVPDict<any, any>, key: any) {
        return dict.get(key)
    }
    //% block="Remove $dict value at key $key" weight=25
    //% dict.defl=myDict
    //% dict.shadow=variables_get
    //% hidden
    export function removeKey(dict: KVPDict<any, any>, key: any) {
        dict.remove(key)
    }
    //% block="Show $dict as string" weight=0
    //% dict.defl=myDict
    //% dict.shadow=variables_get
    //% hidden
    export function toString(dict: KVPDict<any, any>): string {
        return dict.toString()
    }
}