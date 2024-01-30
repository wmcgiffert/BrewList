import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ cookies }) => {
    if(!cookies.get('boatName')){
        cookies.set('boatName', 'The Black Pearl', { path: '/' });
    }
    const boatName = cookies.get('boatName');
    console.log(cookies.get('boatName'));
    return {
        boatName
    };
}) satisfies PageServerLoad;

export const actions = {
    rename: async ({ request, cookies }) => {
        const formData = await request.formData();
        const boatName = formData.get('boatName') as string;
        cookies.set('boatName', boatName, { path: '/' });
    },
    capitalize: async ({ cookies }) => {
        const boatName = cookies.get('boatName') as string;
        cookies.set('boatName', boatName.toUpperCase(), { path: '/' });
    },
    reset: async ({ cookies }) => {
        cookies.set('boatName', 'The Black Pearl', { path: '/' });
    }
} satisfies Actions;