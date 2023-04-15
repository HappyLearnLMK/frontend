import { sampleData } from '$lib/js/sampleData.js';
import { isNull } from '$lib/js/isNull.js';

export const load = ({ url, params }) => {
    console.log('LOAD !!');

    const param = params.category;
    const searchParam = url.searchParams.get('opt');
    const cateData = !isNull(searchParam)
        ? sampleData.filter((state) => state.prod_opt === searchParam)
        : sampleData;

    console.log('param', param);
    console.log('searchParam', searchParam);
    console.log('cateData', cateData);

    return {
        param: param,
        searchParam: searchParam,
        cateData: [...cateData],
        pageIndex: 0,
    };
};

export const prerender = true;
