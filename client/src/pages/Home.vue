<template>
    <div>
        dsfdsdfsdf
        
    </div>
</template>
<script>
export default {
  mounted () {
    console.log(444);
    fetch('/cats', {
        method: 'POST',
        body: JSON.stringify({"uid": 123, "page": 1, "count": 10, "condition": []}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(333, res);
    })
    .catch(e => {
      throw new Error(e);
    })
  }
};
</script>
<style scoped>
</style>
