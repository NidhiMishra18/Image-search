import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',   
    headers: {
        Authorization:
            'Client-ID vLUE0n7CCZHRgki0WSddwtBi1LAKoKsTND4RjpduJHY'        
    }
});