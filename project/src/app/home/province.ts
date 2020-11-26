export class Province {
    province_id: string;
    province_name: string;
    province_image: string;
    list_batik: {
        batik_id: string
    };
    batik_name: string;
    batik_description: string;
    batik_history: string;
    batik_image: string;
    batik_video: string;
    batik_location: string;

    constructor(
        province_id: string,
        province_name: string,
        province_image: string,
        list_batik: {
            batik_id: string
        },
        batik_name: string,
        batik_description: string,
        batik_history: string,
        batik_image: string,
        batik_video: string,
        batik_location: string) {
    }
}
