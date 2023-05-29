import { sampleData } from '$lib/js/sampleData.js';

export const load = ({ url, params }) => {
    console.log('LOAD !!');

    const param = params.category;
    const filter_1 = sampleData.filter((state) => state.prod_cate === param);

    const searchParam = url.searchParams.get('opt');
    const cateData = searchParam
        ? filter_1.filter((state) => state.prod_opt === searchParam)
        : filter_1;

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
