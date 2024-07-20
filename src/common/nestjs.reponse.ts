export class NestJSResponse {
    static toResponseArray(data: any) {
        return {
            status:"success",
            data:[data],
        }
    }
    static toResponse(data: any) {
        return {
            status: 'success',
            data: data,
        };
    }
}