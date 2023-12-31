import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from "aws-lambda";

interface Input {
    url: string;
    name: string;
}

interface Outout {
    title: string; 
    s3_url: string;
}

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
    
    const body: Outout = {
        title: 'Hello world',
        s3_url: 'url goes here'
    }

    return {
        statusCode: 200,
        body: JSON.stringify(body)
    }
}