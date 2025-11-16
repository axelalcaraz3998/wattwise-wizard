import "oj-c/file-picker";

export function CTA() {
  const acceptArr: string[] = ["image/*"];

  return (
    <div
      id="cta"
      class="oj-divider-bottom oj-flex oj-sm-flex-direction-column oj-sm-align-items-center oj-sm-justify-content-center oj-sm-padding-12x"
    >
      <h2 class="oj-text-color-primary oj-typography-heading-lg oj-sm-margin-12x-bottom custom-text-align-center">
        Start Saving!
      </h2>
      <p class="oj-typography-body-lg custom-text-align-center">
        Upload or take a picture of your power bill, we will work our magic on
        our end.
      </p>
      <oj-c-file-picker
        accept={acceptArr}
        secondaryText="Select or drop your power bill here"
      ></oj-c-file-picker>
    </div>
  );
}
