import { getOctokit } from '@actions/github';

import { headingGenerator } from '../constants/messageHeading';

export async function fetchPreviousReport(
    octokit: ReturnType<typeof getOctokit>,
    repo: { owner: string; repo: string },
    pr: { number: number },
    componentName: string
) {
    const commentList = await octokit.paginate(
        'GET /repos/:owner/:repo/issues/:issue_number/comments',
        {
            ...repo,
            issue_number: pr.number,
        }
    );

    const sizeLimitComment = commentList.find((comment) =>
        (comment as { body: string }).body.startsWith(headingGenerator(componentName))
    );

    return !sizeLimitComment ? null : sizeLimitComment;
}
