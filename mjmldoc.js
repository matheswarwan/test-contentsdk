mjmlTitle = [
    'mj-body',
    'mj-include',
    'mj-attribute',
    'mj-accordian',
    'mj-image',
    'mj-social'
]

mjmlDescription = [
    `This is the starting point of your email.`
    ,`The <code>mjml-core</code> package allows you to include external mjml files to build your email template.`
    ,`Inside <code>mj-attributes</code>, a tag citing one MJML component (like <code>mj-text</code>; see example) overrides default settings for listed MJML attributes on the one component.`
    ,`<code>mj-accordion</code> is an interactive MJML component to stack content in tabs, so the information is collapsed and only the titles are visible. Readers can interact by clicking on the tabs to reveal the content, providing a great experience on mobile devices where space is scarce.`
    ,`Displays a responsive image in your email. It is similar to the HTML <code>&lt;img /&gt;</code> tag. Note that if no width is provided, the image will use the parent column width.`
    ,'Displays calls-to-action for various social networks with their associated logo. You can add social networks with the <code>mj-social-element</code> tag.'
]

mjmlText = 
[`<mjml>
    <mj-body>
        <!-- Your email goes here -->
    </mj-body>
</mjml>`
, 
`<!-- header.mjml -->
<mj-section>
    <mj-column>
        <mj-text>This is a header</mj-text>
    </mj-column>
</mj-section>`
,
`<mjml>
    <mj-head>
        <mj-attributes>
        <mj-text padding="0" />
        <mj-class name="blue" color="blue" />
        <mj-class name="big" font-size="20px" />
        <mj-all font-family="Arial" />
        </mj-attributes>
    </mj-head>
    <mj-body>
        <mj-section>
        <mj-column>
            <mj-text mj-class="blue big">
            Hello World!
            </mj-text>
        </mj-column>
        </mj-section>
    </mj-body>
</mjml>`
,
`<mjml>
<mj-head>
  <mj-attributes>
    <mj-accordion border="none" padding="1px" />
    <mj-accordion-element icon-wrapped-url="https://i.imgur.com/Xvw0vjq.png" icon-unwrapped-url="https://i.imgur.com/KKHenWa.png" icon-height="24px" icon-width="24px" />
    <mj-accordion-title font-family="Roboto, Open Sans, Helvetica, Arial, sans-serif" background-color="#fff" color="#031017" padding="15px" font-size="18px" />
    <mj-accordion-text font-family="Open Sans, Helvetica, Arial, sans-serif" background-color="#fafafa" padding="15px" color="#505050" font-size="14px" />
  </mj-attributes>
</mj-head>

<mj-body>
  <mj-section padding="20px" background-color="#ffffff">
    <mj-column background-color="#dededd">
      <mj-accordion>
        <mj-accordion-element>
          <mj-accordion-title>Why use an accordion?</mj-accordion-title>
          <mj-accordion-text>
            <span style="line-height:20px">
              Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way.
            </span>
          </mj-accordion-text>
        </mj-accordion-element>
        <mj-accordion-element>
          <mj-accordion-title>How it works</mj-accordion-title>
          <mj-accordion-text>
            <span style="line-height:20px">
              Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once.
            </span>
          </mj-accordion-text>
        </mj-accordion-element>
      </mj-accordion>
    </mj-column>
  </mj-section>
</mj-body>
</mjml>`
,
`<mjml>
<mj-body>
  <mj-section>
    <mj-column>
      <mj-image width="300px" src="https://www.online-image-editor.com//styles/2014/images/example_image.png" />
    </mj-column>
  </mj-section>
</mj-body>
</mjml>`
,
`<mjml>
<mj-body>
  <mj-section>
    <mj-column>
      <mj-social font-size="15px" icon-size="30px" mode="horizontal">
        <mj-social-element name="facebook" href="https://mjml.io/">
          Facebook
        </mj-social-element>
        <mj-social-element name="google" href="https://mjml.io/">
          Google
        </mj-social-element>
        <mj-social-element  name="twitter" href="https://mjml.io/">
          Twitter
        </mj-social-element>
      </mj-social>
    </mj-column>
  </mj-section>
</mj-body>
</mjml>`
];