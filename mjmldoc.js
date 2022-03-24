mjmlTitle = [
    'mj-body',
    'mj-include',
    'mj-attribute'
]

mjmlDescription = [
    `This is the starting point of your email.`,
    `The <code>mjml-core</code> package allows you to include external mjml files to build your email template.`,
    `Inside <code>mj-attributes</code>, a tag citing one MJML component (like <code>mj-text</code>; see example) overrides default settings for listed MJML attributes on the one component.`
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
];