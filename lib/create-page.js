import { findNavTitleByHref } from "@/lib/navigation";
import { getPageConfig } from "@/lib/page-configs";
import { MasterListPage } from "@/components/pages/master-list-page";
import { DataTablePage } from "@/components/pages/data-table-page";
import { FormPage } from "@/components/pages/form-page";
import { ReportPage } from "@/components/pages/report-page";
import { RoomGridPage } from "@/components/pages/room-grid-page";
import { ClosingPage } from "@/components/pages/closing-page";
import { PlaceholderPage } from "@/components/pages/placeholder-page";
import { ReservationFormPage } from "@/components/pages/reservation-form-page";
import { FolioPage } from "@/components/pages/folio-page";
import { AvailabilityPage } from "@/components/pages/availability-page";
import { CheckoutPage } from "@/components/pages/checkout-page";
import { GuestProfilePage } from "@/components/pages/guest-profile-page";
import { PosBillingPage } from "@/components/pages/pos-billing-page";
import { CheckInPage } from "@/components/pages/check-in-page";

export function createPage(href) {
  const config = getPageConfig(href);
  const title = config.title || findNavTitleByHref(href) || "Page";

  function Page() {
    const pageConfig = { ...config, title };

    switch (pageConfig.type) {
      case "master-list":
        return <MasterListPage {...pageConfig} />;
      case "data-table":
        return <DataTablePage {...pageConfig} />;
      case "form":
        return <FormPage {...pageConfig} />;
      case "report":
        return <ReportPage {...pageConfig} />;
      case "room-grid":
        return <RoomGridPage {...pageConfig} />;
      case "closing":
        return <ClosingPage {...pageConfig} />;
      case "reservation-form":
        return <ReservationFormPage {...pageConfig} />;
      case "folio":
        return <FolioPage {...pageConfig} />;
      case "availability":
        return <AvailabilityPage {...pageConfig} />;
      case "checkout":
        return <CheckoutPage {...pageConfig} />;
      case "guest-profile":
        return <GuestProfilePage {...pageConfig} />;
      case "pos-billing":
        return <PosBillingPage {...pageConfig} />;
      case "check-in":
        return <CheckInPage {...pageConfig} />;
      case "placeholder":
        return <PlaceholderPage {...pageConfig} />;
      default:
        return <PlaceholderPage title={title} description={pageConfig.description} module={pageConfig.module} />;
    }
  }

  return Page;
}
