export const loadInstalled = () => {
    try {
        const data = localStorage.getItem('installed');
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.log(err);
        return [];
    }
};

export const updateInstalled = app => {
    const installed = loadInstalled();

    try {
        const isDuplicate = installed.some(ap => ap.id === app.id);
        if (isDuplicate) return alert('Already Installed')
        const updateInstalled = [...installed, app];
        localStorage.setItem('installed', JSON.stringify(updateInstalled))
    } catch (err) {
        console.log(err)
    }
}


export const removeFromInstalled = id => {
    const installed = loadInstalled()

    try {
        const updateInstalled = installed.filter(ap => ap.id !== id)
        localStorage.setItem('installed', JSON.stringify(updateInstalled))
    } catch (err) {
        console.log(err)
    }
}


export const isInstalled = (id) => {
    const installed = JSON.parse(localStorage.getItem('installed')) || [];
    return installed.some(app => app.id === id);
}