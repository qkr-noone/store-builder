const Core = require('@alicloud/pop-core');

var client = new Core({
  accessKeyId: 'LTAI4FvLRPcB8XHxPJn1gYAe',
  accessKeySecret: 'smdibZ9ihbncQY4eEU4QpWlzshreLt',
  endpoint: 'http://cdn.aliyuncs.com',
  apiVersion: '2018-05-10'
});

var params = {
  "RegionId": "cn-shenzhen",
  "ObjectPath": "https://store.seller.mktail.cn/",
  "ObjectType": "file"
}

var requestOption = {
  method: 'POST'
};

client.request('RefreshObjectCaches', params, requestOption).then((result) => {
  console.log(JSON.stringify(result));
}, (ex) => {
  console.log(ex);
})
