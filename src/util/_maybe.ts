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

    map(f: (value: any) => any): Maybe {
        if (this._value === this.isNothing()) {
            return Maybe.from(null);
        }
        return Maybe.from(f(this._value));
    }

    join(): Maybe {
        return (this._value as Maybe);
    }

    chain(f: (value: any) => any): Maybe {
        return (this._value as Maybe).map(f).join();
    }

    orElse(fallback: any): Maybe {
        if (this._value === this.isNothing()) {
            return Maybe.from(fallback);
        }
        return this;
    }
}
