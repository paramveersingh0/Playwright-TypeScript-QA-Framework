import {test,expect} from '@playwright/test'; import {ApiClient} from '../../utils/apiClient';
test('@smoke GET user returns expected schema',async({request})=>{const r=await new ApiClient(request).getUser(1);const b=await r.json();expect(b).toMatchObject({id:1,name:expect.any(String),username:expect.any(String),email:expect.any(String)});});
test('@regression invalid user returns 404',async({request})=>{const r=await request.get(`${process.env.API_BASE_URL||'https://jsonplaceholder.typicode.com'}/users/99999`);expect(r.status()).toBe(404);});
