---
title: Playbook
layout: page
---

- TOC
{:toc}

## Development

### Local Development

There are many tools that I use across projects that I need to install once system-wide.

**Install Homebrew**

First, open Terminal and paste in the following command:

{:.hug}
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**Install Grunt**

I use [Grunt](https://gruntjs.com/) which requires Node.js.

I can use Homebrew to install Node.js and npm with the following command:

{:.hug}
```
brew install node
```

The [Homebrew docs](https://docs.brew.sh/) and warnings are helpful when troubleshooting any issues. When installing new packages, Homebrew will run `brew update` to make sure it is up to date. If it doesn't then I can run this myself.

Install Grunt CLI globally:

{:.hug}
```
npm install -g grunt-cli
```

**Install rbenv with Homebrew**

Once I install Homebrew, I use Homebrew to install rbenv. This allows me to manage my own installation of Ruby. In the past I have used RVM. See reasons for rbenv over RVM [here](https://github.com/rbenv/rbenv/wiki/Why-rbenv%3F).

<div class="callout" data-text="Note:">
rbenv is <em>incompatible</em> with RVM
</div>

Install rbenv:

{:.hug}
```
brew install rbenv
```

Set up rbenv:

{:.hug}
```
rbenv init
```

Append the following to `~/.zshrc`:

{:.hug}
```
eval "$(rbenv init -)"
```

To edit `.zshrc`, type the following command into Terminal to open:

{:.hug}
```
nano .zshrc
```

To save changes to `.zshrc` type Control-O and hit return to save. Then type Control-X to exit.

For the changes to take effect use the following command or close the Terminal window and open a new one:

{:.hug}
```
source .zshrc
```

To verify rbenv is set up, use the following command:

{:.hug}
```
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
```

Jekyll requires Ruby and RubyGems. Apple include Ruby versions 2.0 and above by default in macOS releases since at least El Capitan (10.11). It is useful to have our own version of Ruby installed using rbenv though.

List all available versions using:

{:.hug}
```
rbenv install -l
```

Install a version using following command:

{:.hug}
```
rbenv install 2.6.2
```

<div class="callout" data-text="Note:">
2.6.2 is the version used for this website. It is set in the <code>.ruby-version</code> file <a href="https://github.com/darylshaw/darylshaw.co.uk/blob/master/.ruby-version">here</a>.
</div>

**Install Bundler**

{:.hug}
```
gem install bundler
```

**Install Git**

When running `git`, there will be a prompt to install Xcode Command Line Tools if it isn't installed. Xcode Command Line tools ships a binary package of Git (version 2.24.3 at the time of writing).

For a more up to date version, use Homebrew:

{:.hug}
```
brew install git
```

Set a username in Git:

{:.hug}
```
git config --global user.name "Daryl Shaw"
```

To confirm that username is set:

{:.hug}
```
git config --global user.name
```

Set an email address in Git:

{:.hug}
```
git config --global user.email "daryl@darylshaw.co.uk"
```

Again, to confirm that is set:

{:.hug}
```
git config --global user.email
```

<div class="callout" data-text="Tip:">
To show hidden files press <strong>⌘-Space-Dot (.)</strong>
</div>

### WordPress

#### Installing Composer on a WordPress project

**Download Composer**

Install [Composer](https://getcomposer.org/) on a per-project basis. Change to the project directory and run the [installer script](https://getcomposer.org/download/).

This downloads the latest `composer.phar`. Now I can run `php composer.phar` to run Composer.

To access the `composer.phar` globally, move it to a directory that is part of the path:

{:.hug}
```
mv composer.phar /usr/local/bin/composer
```

Now I can run `composer` instead of `php composer.phar`.

**Set up project**

In the project create a `composer.json` file.

Example:

{:.hug}
```
{
  "name": "darylshaw/ds-wp-starter",
  "type": "wordpress-theme",
  "description": "WordPress starter theme.",
  "keywords": [
    "WordPress",
    "Themes"
  ],
  "homepage": "https://github.com/darylshaw/ds-wp-starter",
  "license": "GPL-2.0-or-later",
  "authors": [
    {
      "name": "Daryl Shaw",
      "email": "daryl@darylshaw.co.uk",
      "homepage": "https://darylshaw.co.uk",
      "role": "Developer"
    }
  ],
  "require": {
    "php": ">=5.6"
  },
  "require-dev": {
    "dealerdirect/phpcodesniffer-composer-installer": "^0.7.0",
    "wptrt/wpthemereview": "^0.2.1",
    "php-parallel-lint/php-parallel-lint": "^1.2.0",
    "squizlabs/php_codesniffer": "^3.5"
  },
  "scripts": {
    "lint:wpcs": "@php ./vendor/squizlabs/php_codesniffer/bin/phpcs",
    "lint:php": "@php ./vendor/bin/parallel-lint --exclude .git --exclude vendor ."
  },
  "support": {
    "issues": "https://github.com/darylshaw/ds-wp-starter/issues",
    "source": "https://github.com/darylshaw/ds-wp-starter"
  }
}
```

Run:

{:.hug}
```
composer install
```

## Setting up a new Mac

This is for my own benefit when setting up a new Mac. But you may pick up tips along the way.

I find it refreshing starting up a new device and having that clean OS to work from. Before it gets cluttered with apps, packages, and libraries. I enjoy the set up process rather than seeing it as a chore.

My first step when setting up a new device used to be to delete the built-in/pre-installed apps that I didn't use. I had a list of apps to download and trash when setting up a new Mac.

More recently I've tried a new approach:

1. Adopt built-in Apple apps and OS features over third-party standalone apps where possible. Apple tend to roll out features and settings to copy popular apps which makes this easier. For example I check Screen Time instead of using RescueTime. The level of data RescueTime tracked unsettled me.
2. Use the browser before reaching for an app. Use app if there is a clear use case and benefit over the browser. There is a lot you can do in the browser. I don't need added notifications and distractions on top of my procrastination.
3. Download apps as I need them rather than spending time upfront getting them set up. I may find I don't use the app and didn't need it after all. See previous point about the browser.

As much as I am trying to follow the above. There are a couple of holdout apps for me:

* [Alfred](https://www.alfredapp.com/) - more powerful than Spotlight. The hotkey is in my muscle memory. I've been using the app for over 7 years! I don't have the Powerpack upgrade with the current version. Powerpack brings a lot more features and workflows. For example, I could integrate Alfred and [Dash](https://kapeli.com/dash) to look up WP-CLI commands
* [Flux](https://justgetflux.com/) helps me get a better night's sleep. Apple has copied this with their Night Shift setting. I prefer Flux

Apart from that I install:

* [Bartender](https://www.macbartender.com/) - again Apple are giving you more control over system apps these days. Bartender helps to tidy up the rest
* [Fantastical](https://flexibits.com/fantastical) to replace default Calendar app. Feature bloat with latest version but preferred to default Apple Calendar app
* Spotify (for now). I will miss connect and the made for you playlists if I switched away
* [Rocket](https://matthewpalmer.net/rocket/) for emojis 🚀

Mina has a solid [macOS setup script](https://github.com/minamarkham/formation).

I'm missing a VPN. Used ProtonVPN in the past. ExpressVPN or NordVPN look like good options.

Retired apps:

* [BeardedSpice](https://beardedspice.github.io/) - Mac Media Keys for the Masses. RIP iTunes
* [BetterTouchTool](https://folivora.ai/) was handy. Used the window snapping feature a lot over the years with my (sold) Thunderbolt Display. But didn't have a need for the other features. I've managed to avoid the Touch Bar. Can tile windows in macOS if I need to
* [Hazel](https://www.noodlesoft.com/) is a useful app I've used over the years for organisation. I can use the System Information app to empty the bin after 30 days for me and optimise storage. This is a built-in app and suits my needs. Avoid CleanMyMac and similar
* [Tyke](https://tyke.app/) - I'm a heavy Apple Notes user. Downloaded [Tot](https://tot.rocks/) to try which Tyke inspired
* Various productivity apps ([Aware](https://awaremac.com/), [Time Out](https://www.dejal.com/timeout/)). [Setapp](https://setapp.com/) looks interesting. Time Out is in the suite of apps along with others I use or have used (Bartender, BetterTouchTool, Dash, Numi, Sizzy). All for $9.99/month

Pre-installed apps to trash:

* GarageBand - use the System Information app to clear out song library content

**Dock Preferences**

* Turn hiding on
* Don't show recent applications in Dock

This covers top-level utility/misc apps and preferences. Deeper, more specific breakdown of what I use on the way.

## About the playbook

I have docs spread out over Google Drive, Dropbox Paper, Notion, Basecamp. Guides to how I work. They now live here, in my playbook. I find that this structure suits them best. First I used Google Docs. Then Dropbox Paper. Then the plan was to migrate them to Notion. Before Basecamp. They could be blog posts or articles. But I will keep them up to date as processes and best practices evolve where I might not update articles. This is a work in progress and fluid though. And will adapt over time.

**Inspiration**

* [Public Google Drive folder](https://drive.google.com/drive/folders/1wBlDBNJI3h1KL-jeFqGiRr1U3OZDBQkV?usp=sharing) of how HAWRAF ran their studio
* [GravityDept Field Manuals](https://manuals.gravitydept.com/)
* [Meanbee Playbook](https://www.meanbee.com/our-playbook.html)

**Note on Basecamp**

I cancelled my Basecamp and HEY accounts after what happened back in April. Casey Newton has [two](https://www.platformer.news/p/-what-really-happened-at-basecamp) [pieces](https://www.platformer.news/p/-how-basecamp-blew-up) covering it on Platformer. I've used Basecamp's products for years. Read their books. Their [open source handbook](https://github.com/basecamp/handbook) is part inspiration for this playbook. It's sad to see what was happening behind closed doors.
