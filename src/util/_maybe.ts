export default class Maybe {
    _value: any;

    constructor(value: any) {
        this._value = value;
    }

    static from(value: any): Maybe {
        return new Maybe(value);
    }

    isNothing() {
        return (this._value === null || this._value === undefined);
    }

    get(prop: string): Maybe {
        return this.map(() => this._value[prop]);
    }

    // takes "." separated nested props
    getPath(prop: string): Maybe {
        return Maybe.from(prop.split("."))
          .map(([first, ...rest]) => 
                 rest.length > 0 
                 ?
                 Maybe.from(this._value[first]).getPath(rest.join(".")).join()
                 :
                 Maybe.from(this._value).get(first).join()
                );
    }

    map(f: (value: any) => any): Maybe {
        if (this.isNothing()) {
            return Maybe.from(null);
        }
        return Maybe.from(f(this._value));
    }

    // Unwraps a layer of Maybes
    join(): Maybe {
        return (this._value as Maybe);
    }

    chain(f: (value: any) => any): Maybe {
        return (this._value as Maybe).map(f).join();
    }

    orElse(fallback: any): Maybe {
        if (this.isNothing()) {
            return Maybe.from(fallback);
        }
        return this;
    }
}
