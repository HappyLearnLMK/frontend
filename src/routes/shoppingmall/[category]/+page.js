export const load = async ({ fetch, url, params }) => {
    console.log('LOAD !!');
    
    const param = params.category;
    
    const fetchData = async () => {
        const cate = await fetch('http://localhost:8080/product/category', {
            method: 'POST',
            body: JSON.stringify({
                mainCategory: 'cloths',
                middleCategory: 'outer',
                page: 0,
                size: 8,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        const data = await cate.json();
        
        return data.data.content;
    };
    
    return {
        param: param,
        pageIndex: 0,
        category: fetchData(),
    };
};

export const prerender = true;
