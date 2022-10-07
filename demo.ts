import "reflect-metadata";
import {Length, validate, ValidateNested,} from 'class-validator';
import {plainToInstance, Type} from "class-transformer";

class Nest {
    @Length(10, 20)
    name: string
}

class Demo {
    @Length(10, 20)
    title: string;

    @ValidateNested()
    @Type(() => Nest)
    nest: Nest;
}

let demo = plainToInstance(Demo, {title: "hello", nest: {name: "world"}});

validate(demo).then(errors => console.log(JSON.stringify(errors, null, 2)));
