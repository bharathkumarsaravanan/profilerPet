import React from "react";
import { Flyout, Button } from "clcomponents";
import { FlyoutContainer } from "./FlyoutContainer";

export const AlertComponent = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const sampleData = {
        name: "people-and-teams-configuration-service",
        publishMetadata: {
          metricTags: {},
        },
        dimensions: {
          locale: {
            supported: [
              "en-US",
              "cs",
              "da",
              "de",
              "en-GB",
              "es",
              "et",
              "fi",
              "fr",
              "hu",
              "it",
              "ja",
            ],
            supported1: [
                "en-US",
                "cs",
                "da",
                "de",
                "en-GB",
                "es",
                "et",
                "fi",
                "fr",
                "hu",
                "it",
                "ja",
              ],
              supported2: [
                "en-US",
                "cs",
                "da",
                "defsezgrxfwdhegwdjygwedukewjyfgvwyehvgedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywedhegwdjygwedukewjyfgvwyehvgewywewywevfgewvfd",
                "en-GB",
                "es",
                "et",
                "fi",
                "fr",
                "hu",
                "it",
                "ja",
              ],
              supported3: [
                "en-US",
                "cs",
                "da",
                "de",
                "en-GB",
                "es",
                "et",
                "fi",
                "fr",
                "hu",
                "it",
                "ja",
              ],
            fallback: "en-US",
          },
          version: {
            supported: ["do-not-parse-1715928779789"],
            fallback: "do-not-parse-1715928779789",
          },
        },
        tagScheme: "v002-n_$name$-l_$locale$-v_$version$",
        frontend: true,
      };
    return (
      <div>
        <Button onClick={() => setIsOpen(true)} variant="dark">
          Open Flyout
        </Button>
        <Flyout flyoutWidth='35vw' onExit={() => setIsOpen(false)} visibility={isOpen} title="Add Account">
            <FlyoutContainer data={sampleData} />
        </Flyout>
      </div>
    );
}