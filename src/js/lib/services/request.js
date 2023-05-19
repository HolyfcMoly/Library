import '../core'

$.prototype.get = async function(url, dataTypeAns = 'json') {
    let res = await fetch(url)

    if(!res.ok) {
        throw new Error(`could not fetch ${url}, status: ${res.status}`)
    }

    switch (dataTypeAns) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
}

$.prototype.post = async function(url, data, dataTypeAns = 'text') {
    let res = await fetch(url, {
        method: "POST",
        body: data,
        });
    
        switch (dataTypeAns) {
            case 'json':
                return await res.json();
            case 'text':
                return await res.text();
            case 'blob':
                return await res.blob();
        }
}