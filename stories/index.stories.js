import { storiesOf } from "@storybook/react";
import { withKnobs } from '@storybook/addon-knobs';
import React from "react";

import Welcome from "./pages/welcome.stories";
import {
  Button,
  Accordion,
  Dropdown,
  Breadcrumb,
  Masthead,
  Footer,
  SideNav,
  MainNav,
  Tab,
  Notification
} from "./components";

import buttonNotes from "./notes/components/buttons.md";
import welcomeNotes from "./notes/welcome.md";
import accordionNotes from "./notes/components/accordions.md";
import breadcrumbNotes from "./notes/components/breadcrumb.md";
import mainNavNotes from "./notes/components/mainnav.md";
import footerNotes from "./notes/components/footer.md";
import sideNavNotes from "./notes/components/sidenav.md";
import mastheadNotes from "./notes/components/masthead.md";

storiesOf("Welcome", module).add("Introduction", () => <Welcome></Welcome>, {
  notes: { markdown: welcomeNotes }
});

storiesOf("Digital Service Standards Components", module)
  .add("Masthead", () => <Masthead />, {
    notes: { markdown: mastheadNotes }
  })
  .add("Main Navigation Panel", () => <MainNav />, {
    notes: { markdown: mainNavNotes }
  })
  .add("Footer", () => <Footer />, {
    notes: { markdown: footerNotes }
  })
  .add("Side Navigation Panel", () => <SideNav />, {
    notes: { markdown: sideNavNotes }
  }).addDecorator(withKnobs);

storiesOf("Components", module)
  .add("Accordions", () => <Accordion />, {
    notes: { markdown: accordionNotes }
  })
  .add("Buttons", () => <Button />, {
    notes: { markdown: buttonNotes }
  })
  .add("Dropdowns", () => <Dropdown />)
  .add("Tab", () => <Tab />)
  .add("Notification", () => <Notification />)
  .add("Breadcrumbs", () => <Breadcrumb />, {
    notes: { markdown: breadcrumbNotes }
  }).addDecorator(withKnobs);

