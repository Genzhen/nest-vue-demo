import { AppService } from './app.service';
declare class CreateCatDto {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    sss(request: any, body: any, param: any, query: any, headers: any): string;
    create(createCatDto: CreateCatDto): Promise<{
        a: number;
    }>;
}
export {};
