
import AxiosInstanceForHomePageData from '../Helpers/AxiosInstance';
import { Api_Key } from '../Helpers/ApiKey';

async function FetchHomePageData() {
    try {
 
        const endpoint = 'videos'; 

   
        const response = await AxiosInstanceForHomePageData.get(endpoint, {
            params: {
                key: Api_Key, 
               
                part:'snippet,statistics', 
                chart:'mostPopular',
                maxResults:90
            }
        });

        console.log(response.data); 
        return response.data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default FetchHomePageData;
