import axios from 'axios'
import { Mock } from '../server/mock'

export const asyncAjax = (value, success, error) => {
    if (!value) return;
    axios.get('/mock?value=' + encodeURIComponent(value))
        .then((res) => {
            if (res.status == 200) {
                // 成功
                success(res.data);
            }
        })
        .catch((err) => {
            error();
        });     // 模拟请求
}