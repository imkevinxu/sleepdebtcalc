Sleepdebtcalc
================

Auto-generated from [Kevin Xu](https://github.com/imkevinxu)'s [Django Project Builder](https://github.com/imkevinxu/django-projectbuilder)

### Development Team

* Kevin Xu <kevin@imkevinxu.com>

## Getting Started

### Dependencies

For best results, make sure you have at least:

* Python 2.7
* Django 1.5

### Customizations

* [Jinja2](http://jinja.pocoo.org/docs/) templating with [Coffin](https://github.com/coffin/coffin)
* [Django Debug Toolbar](https://github.com/django-debug-toolbar/django-debug-toolbar)
* [bcrypt](https://docs.djangoproject.com/en/dev/topics/auth/#using-bcrypt-with-django) password hashing
* [South](http://south.readthedocs.org/en/0.7.6/index.html) database migration

### Installing the Application

    cd sleepdebtcalc/                                                 # changes directory to project after initial git clone
    mkvirtualenv sleepdebtcalc                                        # requires proper virtualenv setup
    workon sleepdebtcalc                                              # sets the virtual environment

    pip install -r requirements.txt                                   # installs all python packages
    python manage.py syncdb                                           # sets up django database
    python manage.py migrate sleepdebtcalc                            # migrates any south migrations

### Running the Application

Application will be running at [http://localhost:8000](http://localhost:8000) after running one of the two commands:

    python manage.py runserver                                        # Normal way

    foreman start                                                     # Advanced way
                                                                      # Requires .env and .env.dev files (see below)
                                                                      # Sources environment variables and runs all processes
                                                                      # Packaged with Heroku Toolbelt https://toolbelt.heroku.com/

## Troubleshooting

### Local Environment Variables

App uses a local .env and .env.dev not tracked in the git repo to get some environment variables. Email Kevin Xu <kevin@imkevinxu.com> to get the latest version

### Workflow

In case something's not working after pulling, try one of these:

    workon sleepdebtcalc                                              # makes sure you're in the right virtual environment
    pip install -r requirements.txt                                   # makes sure python packages are up to date
    python manage.py migrate sleepdebtcalc                            # makes sure database schema is migrated
    source .env.dev                                                   # makes sure local environment variables are setup

### Missing Dependencies

If you are missing some dependencies like `pip`, `django`, `virtualenv`, or`virtualenvwrapper`
then try downloading and running this [script](https://github.com/imkevinxu/django-projectbuilder/blob/master/install_dependencies.sh) or use this line of code:

    curl -O https://raw.github.com/imkevinxu/django-projectbuilder/master/install_dependencies.sh && source install_dependencies.sh && rm -f install_dependencies.sh

Script has been tested with Mac OSX 10.7 (lion) and 10.8 (mountain lion) so far.