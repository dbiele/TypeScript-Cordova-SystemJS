/**
 * Used to demonstrate external module is loading and function is called.
 */

export function appExternalModuleTest(): void{
    console.log('testmodules called in testExternalModules');
    console.log('jQuery version = ' + $().jquery);
}