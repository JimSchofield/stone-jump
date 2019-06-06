const target = {
    registerRenderFunction(func: () => void) {
        this.render = func;
    }
}

const stateHandler: ProxyHandler<any> = {
    set(state: any, prop: string, value: any): boolean {
        // console.log(`Setting ${prop} to: `, value);
        state[prop] = value;
        state.render();
        return true;
    }
}

export default new Proxy(target, stateHandler);