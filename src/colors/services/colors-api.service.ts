import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ColorsApiService {
    private API_URL = 'https://www.thecolorapi.com/id?format=json';

    public async getColorName(hex: string): Promise<string> {
        try {
            if (hex[0] === '#') {
                hex = hex.slice(1, hex.length);
            }

            const { data } = await axios.get(`${this.API_URL}&hex=${hex}`);

            console.log(data);

            return data.name.value;
        } catch (e) {
            console.log(e);
            throw new HttpException(e.message, e.code);
        }
    }
}
