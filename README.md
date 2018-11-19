![FAQ Zenika](https://github.com/Zenika/FAQ/raw/master/docs/banner_img.png)

# FAQ Zenika

Internal Knowledge Database for Zenika members - https://faq.zenika.com

## What is FAQ?

**FAQ** is an **internal knowledge database** for Zenika members. It aims to be the **"single source of truth"** for most of Zenika-oriented information: _"How does the variable part of the salary work?"_, _"Can the client ask me to stay late at work?"_, ...

## Philosophy

- **Single source of truth:** Regrouping useful information
- **Intuitive:** Not only developer-oriented
- **Integrated:** Works well with the Zenika tool suite
- **Internationalized:** Open to the world

## Architecture

#### Frontend :

- JS _(React, Apollo)_
- CSS _(Custom-made)_

#### Backend :

- Node JS
- Prisma
- PostgreSQL

#### Backing services :

- Algolia _(FullTextSearch-as-a-Service)_
- Mailgun _(Mail-as-a-Service)_
- Auth0 _(Auth-as-a-Service)_

#### Integrations :

- Slack: Sending new questions into a dedicated channel
- Workplace: Button to share questions
- Public API: Write your own integration to query the FAQ

## Documentation

New to this project ?

- [Step-by-step installation](https://zenika.github.io/FAQ/getting-started) with only the required backing services

The full documentation is available here:

- https://zenika.github.io/FAQ

## License

This project is under the MIT License - See the [LICENSE.md](https://github.com/Zenika/FAQ/blob/master/LICENSE.md) file for details
