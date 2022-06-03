The default installation of Tailwind CSS doesn't work. Maybe
Middleman overrides Tailwind CSS output. Maybe using [External
Pipeline](https://middlemanapp.com/advanced/external-pipeline/) with Tailwind
CSS would help.

Also, there's some file naming inconsistency - `layout.erb` vs
`layout.html.erb` and `style.scss` vs `style.css.scss`.
