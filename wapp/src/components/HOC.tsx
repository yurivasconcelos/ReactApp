export const a = ""

const log = (fn: any) => {
    console.log('logging')
    fn();
}

log(console.log('hey'))

