# Overview #

This is the source code for the PyLadies PDX website. We welcome contributions from all of our members! Our site is hosted on Github Pages, and is built on top of Jekyll. Because Jekyll is a Ruby product, you will need to follow the instructions below to ensure that you can build the site locally.

## How to Get Started ##

** These instructions assume that you are on a Mac OSX machine running Lion or later. If you are running an older version of OSX or are a Windows or Linux user you may need to troubleshoot or otherwise plan for different specific steps, though the general requirements remain the same. **

Steps:

First, make sure all the basics are up to date:

* XCode: Version; also make sure that you've updated to the latest version of command-line tools by going to Preferences to verify

* Homebrew: if you don't already have Homebrew installed, go and grab it by copying/running the following into the command line:

```ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"```

--Otherwise, run ``` $ brew update ``` to make sure your version is up to date

Run ``` $ brew doctor ``` and follow any instructions until you get "raring to brew" in the output

Next:

* Check to see if you have Ruby Version Manager installed by running ``` $ rvm --version ```

--if yes, run ``` $ rvm get stable --auto ``` to update to ensure you are running the latest version

--if no, run ``` $ \curl -#L https://get.rvm.io | bash -s stable --autolibs=3 --ruby ```

{{ this will install the newest version of ruby along with autolibs, and you can go ahead and skip down to "rvm use 2.0.0 step }}

If you only needed to update, you'll also need to do the following:
 * Run ``` $ rvm autolibs enable ``` {{ tells rvm to find things it needs to build new versions of ruby }}
 * Run ``` $ rvm install ruby ``` {{ installs the latest version of ruby alongside any system install you already have; rvm lets you switch between versions. This will take 10-15 mins, so sit tight }}

Tell RVM to use the latest version of Ruby by running ``` $ rvm use 2.0.0 ```

Make sure this version is being sourced by running: ``` $ ruby --version ``` {{ should be 2.0.0 }}

* Update RubyGems package manager by running ``` $ gem update --system ```

--running ``` $ gem --version ``` should now return 2.0.3

* Installer Bundler: `$ gem install bundler`

Get the site set up:

* Fork and clone this repo, then `cd` into the pyladies.github.io directory.

* Install Jekyll using Bundler: `$ bundle install`

* To run the site locally, run `bundle exec jekyll serve`

** See the TODOs for things that need to be done; develop locally **

When you're satisfied with the changes you've made, submit a pull request (by clicking "Pull Request" on your fork's page)!

Note: for blog posts, see the "blog_template.md" file in "_posts" for formatting 
