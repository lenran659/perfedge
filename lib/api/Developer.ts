export const getContributors = async () => {
    const response = await fetch(
        'https://api.github.com/repos/minorcell/perfedge/contributors',
    );

    if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.status}`);
    }
    const data = await response.json();
    return data;
};
