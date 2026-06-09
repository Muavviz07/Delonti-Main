const ids = ['1153765212', '1153764948', '1153764659', '1153764350', '1153764043', '1153763709', '1153763472', '1153763159', '1153762836', '1153762480', '1153761741', '1153761078'];
Promise.all(ids.map(id => fetch(`https://vimeo.com/api/v2/video/${id}.json`).then(r => r.json()).then(d => ({id, url: d[0].thumbnail_large}))))
    .then(res => console.log(JSON.stringify(res, null, 2)));
