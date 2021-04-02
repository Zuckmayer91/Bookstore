import * as fs from 'fs';
import {parse} from 'dotenv';

export class ConfigService{
    private readonly envConfing:{[key: string]: string };

    constructor(){
        const isDevelopmentEnv = process.env.NODE_ENV !== "production";

        if(isDevelopmentEnv){
          const envFilePath = __dirname + '/../../.env';
          const existpath = fs.existsSync(envFilePath)

          if(!existpath){
            console.log('Archivo .env no existe');
            process.exit(0);
          }
          this.envConfing = parse(fs.readFileSync(envFilePath));
          
        }else{
          this.envConfing= {
            PORT: process.env.PORT,
          };
        }
    }

    get(key: string): string {
      return this.envConfing[key];
    }

}




