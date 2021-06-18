import { createDecorator } from 'vue-class-component'

export function MyDecorator(token: string) {
    return (target: any, property: string) => {
        console.log(`Setting metadata to: ${property}`);
        Reflect.defineMetadata("myMetadataKey", property, target);

        console.log(`Metadata set to: ${Reflect.getMetadata("myMetadataKey", target)}`);
    };
}

export const MyDecorator2 = createDecorator((options, key) => {
    console.log(`Setting metadata to:${key}`);
    Reflect.defineMetadata("myMetadataKey", key, options);
    
    console.log(`Metadata set to: ${Reflect.getMetadata("myMetadataKey", options)}`);
});