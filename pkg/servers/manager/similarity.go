package manager

import (
	pb_svc_manager_similarity "github.com/aglide100/dak-keyword/pb/svc/manager/similarity"
)

type SimilaritySrv interface {
	pb_svc_manager_similarity.SimilarityServiceServer
}
